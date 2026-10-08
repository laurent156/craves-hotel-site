// Every published page and the view that renders it. Adding a page = one line here
// (plus its slugs in src/i18n/routes.ts). Used by the page generator and the sitemap.
import HomeView from './home/HomeView.astro';
import RoomsView from './rooms/RoomsView.astro';
import RoomView from './rooms/RoomView.astro';
import VenueView from './venue/VenueView.astro';
import LocationView from './location/LocationView.astro';
import StoryView from './craves/StoryView.astro';
import GalleryView from './craves/GalleryView.astro';
import PressView from './craves/PressView.astro';
import FaqView from './info/FaqView.astro';
import ContactView from './info/ContactView.astro';
import LegalView from './info/LegalView.astro';
import GuideView from './guide/GuideView.astro';
import ArticleView from './guide/ArticleView.astro';
import type { RouteKey } from '../i18n/routes';

// Astro components with different props: rendered generically by src/pages/[...path].astro.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyView = (props: any) => any;
export type PageEntry = { view: AnyView; props?: Record<string, unknown> };

export const PAGES: Partial<Record<RouteKey, PageEntry>> = {
  home: { view: HomeView },
  rooms: { view: RoomsView },
  roomSingle: { view: RoomView, props: { roomKey: 'roomSingle' } },
  roomDouble: { view: RoomView, props: { roomKey: 'roomDouble' } },
  roomTriple: { view: RoomView, props: { roomKey: 'roomTriple' } },
  roomFamily: { view: RoomView, props: { roomKey: 'roomFamily' } },
  conteur: { view: VenueView, props: { venue: 'conteur' } },
  scene: { view: VenueView, props: { venue: 'scene' } },
  location: { view: LocationView },
  story: { view: StoryView },
  gallery: { view: GalleryView },
  press: { view: PressView },
  faq: { view: FaqView },
  contact: { view: ContactView },
  guide: { view: GuideView },
  guideGrandPlace: { view: ArticleView, props: { article: 'guideGrandPlace' } },
  guideWinter: { view: ArticleView, props: { article: 'guideWinter' } },
  guideMidi: { view: ArticleView, props: { article: 'guideMidi' } },
  guideWeekend: { view: ArticleView, props: { article: 'guideWeekend' } },
  privacy: { view: LegalView, props: { page: 'privacy' } },
  cookies: { view: LegalView, props: { page: 'cookies' } },
  legal: { view: LegalView, props: { page: 'legal' } },
};
