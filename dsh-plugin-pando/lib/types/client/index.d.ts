/**
 * Type declarations for the browser half of `@purezhi/dsh-plugin-pando`
 * (`@purezhi/dsh-plugin-pando/client`).
 *
 * This module mounts the pet itself: it injects its own DOM and styles, handles
 * dragging and click reactions, plays sprite animations, and registers the
 * configuration pages that appear on the plugin's page in the Plugin Manager.
 * Everything it owns is released again when the plugin's fiber is disposed.
 */

/** The subset of the browser plugin context this module uses. */
export interface PandoClientContext {
  /** Register a disposer that runs when the plugin is disabled or reloaded. */
  effect?(callback: () => unknown, label?: string): unknown;
  /** Fallback lifecycle hook used when `effect` is unavailable. */
  on?(event: "dispose", callback: () => void): unknown;
  /** Wait for a service before running the callback. */
  inject?(deps: string[], callback: (ctx: unknown) => unknown): unknown;
  /** The options surface the browser context is created with. */
  fiber?: unknown;
  /** Shared configuration form service, when the deployment provides it. */
  configForms?: unknown;
  /** Remote settings namespace, when the deployment provides it. */
  remote?: unknown;
  /** Plugin-page slot registry. */
  slots?: unknown;
}

/**
 * Mount the pet in the current document and register its configuration pages.
 * Safe to call again after a reload: the previous instance's DOM is removed by
 * its disposer, and this call claims the slot registrations once more.
 */
export declare function apply(ctx: PandoClientContext): void;
