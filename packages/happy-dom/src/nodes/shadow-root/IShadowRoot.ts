import IDocumentFragment from '../document-fragment/IDocumentFragment.js';
import IElement from '../element/IElement.js';
import Event from '../../event/Event.js';
import { CSSStyleSheet } from '../../index.js';

/**
 * ShadowRoot.
 */
export default interface IShadowRoot extends IDocumentFragment {
	mode: string;
	innerHTML: string;
	host: IElement;
	adoptedStyleSheets: CSSStyleSheet[];
	readonly activeElement: IElement | null;

	// Events
	onslotchange: (event: Event) => void | null;

	/**
	 * Clones a node.
	 *
	 * @override
	 * @param [deep=false] "true" to clone deep.
	 * @returns Cloned node.
	 */
	cloneNode(deep?: boolean): IShadowRoot;
}
