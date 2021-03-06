import { Constructor } from '@open-wc/dedupe-mixin';
import { DisabledHost } from './DisabledMixinTypes';
import { LitElement } from '../index.js';
export declare class DisabledWithTabIndexHost {
  constructor(...args: any[]);
  tabIndex: number;
  /**
   * Makes request to make the element disabled and set the tabindex
   */
  public makeRequestToBeDisabled(): void;

  /**
   * Retract request to make the element disabled and restore disabled and tabindex to previous
   */
  public retractRequestToBeDisabled(): void;

  private __internalSetTabIndex(value: boolean): void;

  firstUpdated(changedProperties: import('lit-element').PropertyValues): void;
}

export declare function DisabledWithTabIndexMixinImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T & Constructor<DisabledWithTabIndexHost> & Constructor<DisabledHost>;

export type DisabledWithTabIndexMixin = typeof DisabledWithTabIndexMixinImplementation;
