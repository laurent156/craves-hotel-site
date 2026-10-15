// Sends the forms marked data-api-form to the Cloudflare function (functions/api/contact.ts) with fetch,
// and shows the result in the status block next to the button.
// Without JavaScript the form cannot be sent: the page always shows the phone and e-mail as an alternative.

export {};

type State = 'sending' | 'success' | 'error';

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

function show(form: HTMLFormElement, state: State | null): void {
  form.querySelectorAll<HTMLElement>('[data-state]').forEach((el) => {
    el.hidden = el.dataset.state !== state;
  });
}

async function send(form: HTMLFormElement): Promise<void> {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const payload = {
    ...Object.fromEntries(new FormData(form).entries()),
    kind: form.dataset.kind,
    locale: form.dataset.locale,
  };

  button?.setAttribute('disabled', '');
  show(form, 'sending');
  try {
    const response = await fetch(form.dataset.endpoint ?? '', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    form.setAttribute('data-sent', '');
    show(form, 'success');
    form.reset();
  } catch {
    show(form, 'error');
    button?.removeAttribute('disabled');
    window.turnstile?.reset();
  }
}

document.querySelectorAll<HTMLFormElement>('form[data-api-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.checkValidity()) void send(form);
    else form.reportValidity();
  });
});
