import type { RouteRecordRaw, RouteMeta } from 'vue-router';
// import { RoleEnum } from '@/enums/roleEnum';
import { defineComponent } from 'vue';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
/**
* `Omit` 的作用是从接口/类型中忽略某些字段，返回一个新类型，这些忽略字段的定义都被从新类型中排除掉了。
* 在这个例子中，我们扩展了 `RouteRecordRaw` 接口，用于描述单个路由记录的配置对象，但是在我们的 `AppRouteRecordRaw` 类型里，
* 我们想要忽略 `RouteRecordRaw` 中的 `meta` 字段，因为我们会将这些路由记录与自定义的路由元信息 `RouteMeta` 对象合并。
* 如果不使用 `Omit`，我们的 `AppRouteRecordRaw` 接口就会继承原有的 `meta` 字段，这样就会造成冲突。
* 所以需要使用 `Omit` 将 `meta` 字段从 `RouteRecordRaw` 中排除掉，避免冲突。
 */
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

// export interface MenuTag {
//   type?: 'primary' | 'error' | 'warn' | 'success';
//   content?: string;
//   dot?: boolean;
// }

// export interface Menu {
//   name: string;

//   icon?: string;

//   img?: string;

//   path: string;

//   // path contains param, auto assignment.
//   paramPath?: string;

//   disabled?: boolean;

//   children?: Menu[];

//   orderNo?: number;

//   roles?: RoleEnum[];

//   meta?: Partial<RouteMeta>;

//   tag?: MenuTag;

//   hideMenu?: boolean;
// }

// export type MenuModule = Menu;

// export type AppRouteModule = RouteModule | AppRouteRecordRaw;
export type AppRouteModule = AppRouteRecordRaw;
