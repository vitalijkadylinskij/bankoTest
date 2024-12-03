/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/auth'
import { Route as BasicLayoutImport } from './routes/_basic-layout'
import { Route as BasicLayoutIndexImport } from './routes/_basic-layout/index'
import { Route as BasicLayoutStressTestingImport } from './routes/_basic-layout/stress-testing'
import { Route as BasicLayoutProfileImport } from './routes/_basic-layout/profile'
import { Route as BasicLayoutDashboardImport } from './routes/_basic-layout/dashboard'
import { Route as BasicLayoutCreditListImport } from './routes/_basic-layout/credit-list'
import { Route as BasicLayoutBiAnalyticsImport } from './routes/_basic-layout/bi-analytics'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const BasicLayoutRoute = BasicLayoutImport.update({
  id: '/_basic-layout',
  getParentRoute: () => rootRoute,
} as any)

const BasicLayoutIndexRoute = BasicLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => BasicLayoutRoute,
} as any)

const BasicLayoutStressTestingRoute = BasicLayoutStressTestingImport.update({
  id: '/stress-testing',
  path: '/stress-testing',
  getParentRoute: () => BasicLayoutRoute,
} as any)

const BasicLayoutProfileRoute = BasicLayoutProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => BasicLayoutRoute,
} as any)

const BasicLayoutDashboardRoute = BasicLayoutDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => BasicLayoutRoute,
} as any)

const BasicLayoutCreditListRoute = BasicLayoutCreditListImport.update({
  id: '/credit-list',
  path: '/credit-list',
  getParentRoute: () => BasicLayoutRoute,
} as any)

const BasicLayoutBiAnalyticsRoute = BasicLayoutBiAnalyticsImport.update({
  id: '/bi-analytics',
  path: '/bi-analytics',
  getParentRoute: () => BasicLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_basic-layout': {
      id: '/_basic-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof BasicLayoutImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_basic-layout/bi-analytics': {
      id: '/_basic-layout/bi-analytics'
      path: '/bi-analytics'
      fullPath: '/bi-analytics'
      preLoaderRoute: typeof BasicLayoutBiAnalyticsImport
      parentRoute: typeof BasicLayoutImport
    }
    '/_basic-layout/credit-list': {
      id: '/_basic-layout/credit-list'
      path: '/credit-list'
      fullPath: '/credit-list'
      preLoaderRoute: typeof BasicLayoutCreditListImport
      parentRoute: typeof BasicLayoutImport
    }
    '/_basic-layout/dashboard': {
      id: '/_basic-layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof BasicLayoutDashboardImport
      parentRoute: typeof BasicLayoutImport
    }
    '/_basic-layout/profile': {
      id: '/_basic-layout/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof BasicLayoutProfileImport
      parentRoute: typeof BasicLayoutImport
    }
    '/_basic-layout/stress-testing': {
      id: '/_basic-layout/stress-testing'
      path: '/stress-testing'
      fullPath: '/stress-testing'
      preLoaderRoute: typeof BasicLayoutStressTestingImport
      parentRoute: typeof BasicLayoutImport
    }
    '/_basic-layout/': {
      id: '/_basic-layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof BasicLayoutIndexImport
      parentRoute: typeof BasicLayoutImport
    }
  }
}

// Create and export the route tree

interface BasicLayoutRouteChildren {
  BasicLayoutBiAnalyticsRoute: typeof BasicLayoutBiAnalyticsRoute
  BasicLayoutCreditListRoute: typeof BasicLayoutCreditListRoute
  BasicLayoutDashboardRoute: typeof BasicLayoutDashboardRoute
  BasicLayoutProfileRoute: typeof BasicLayoutProfileRoute
  BasicLayoutStressTestingRoute: typeof BasicLayoutStressTestingRoute
  BasicLayoutIndexRoute: typeof BasicLayoutIndexRoute
}

const BasicLayoutRouteChildren: BasicLayoutRouteChildren = {
  BasicLayoutBiAnalyticsRoute: BasicLayoutBiAnalyticsRoute,
  BasicLayoutCreditListRoute: BasicLayoutCreditListRoute,
  BasicLayoutDashboardRoute: BasicLayoutDashboardRoute,
  BasicLayoutProfileRoute: BasicLayoutProfileRoute,
  BasicLayoutStressTestingRoute: BasicLayoutStressTestingRoute,
  BasicLayoutIndexRoute: BasicLayoutIndexRoute,
}

const BasicLayoutRouteWithChildren = BasicLayoutRoute._addFileChildren(
  BasicLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof BasicLayoutRouteWithChildren
  '/auth': typeof AuthRoute
  '/bi-analytics': typeof BasicLayoutBiAnalyticsRoute
  '/credit-list': typeof BasicLayoutCreditListRoute
  '/dashboard': typeof BasicLayoutDashboardRoute
  '/profile': typeof BasicLayoutProfileRoute
  '/stress-testing': typeof BasicLayoutStressTestingRoute
  '/': typeof BasicLayoutIndexRoute
}

export interface FileRoutesByTo {
  '/auth': typeof AuthRoute
  '/bi-analytics': typeof BasicLayoutBiAnalyticsRoute
  '/credit-list': typeof BasicLayoutCreditListRoute
  '/dashboard': typeof BasicLayoutDashboardRoute
  '/profile': typeof BasicLayoutProfileRoute
  '/stress-testing': typeof BasicLayoutStressTestingRoute
  '/': typeof BasicLayoutIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_basic-layout': typeof BasicLayoutRouteWithChildren
  '/auth': typeof AuthRoute
  '/_basic-layout/bi-analytics': typeof BasicLayoutBiAnalyticsRoute
  '/_basic-layout/credit-list': typeof BasicLayoutCreditListRoute
  '/_basic-layout/dashboard': typeof BasicLayoutDashboardRoute
  '/_basic-layout/profile': typeof BasicLayoutProfileRoute
  '/_basic-layout/stress-testing': typeof BasicLayoutStressTestingRoute
  '/_basic-layout/': typeof BasicLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/auth'
    | '/bi-analytics'
    | '/credit-list'
    | '/dashboard'
    | '/profile'
    | '/stress-testing'
    | '/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/auth'
    | '/bi-analytics'
    | '/credit-list'
    | '/dashboard'
    | '/profile'
    | '/stress-testing'
    | '/'
  id:
    | '__root__'
    | '/_basic-layout'
    | '/auth'
    | '/_basic-layout/bi-analytics'
    | '/_basic-layout/credit-list'
    | '/_basic-layout/dashboard'
    | '/_basic-layout/profile'
    | '/_basic-layout/stress-testing'
    | '/_basic-layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  BasicLayoutRoute: typeof BasicLayoutRouteWithChildren
  AuthRoute: typeof AuthRoute
}

const rootRouteChildren: RootRouteChildren = {
  BasicLayoutRoute: BasicLayoutRouteWithChildren,
  AuthRoute: AuthRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_basic-layout",
        "/auth"
      ]
    },
    "/_basic-layout": {
      "filePath": "_basic-layout.tsx",
      "children": [
        "/_basic-layout/bi-analytics",
        "/_basic-layout/credit-list",
        "/_basic-layout/dashboard",
        "/_basic-layout/profile",
        "/_basic-layout/stress-testing",
        "/_basic-layout/"
      ]
    },
    "/auth": {
      "filePath": "auth.tsx"
    },
    "/_basic-layout/bi-analytics": {
      "filePath": "_basic-layout/bi-analytics.tsx",
      "parent": "/_basic-layout"
    },
    "/_basic-layout/credit-list": {
      "filePath": "_basic-layout/credit-list.tsx",
      "parent": "/_basic-layout"
    },
    "/_basic-layout/dashboard": {
      "filePath": "_basic-layout/dashboard.tsx",
      "parent": "/_basic-layout"
    },
    "/_basic-layout/profile": {
      "filePath": "_basic-layout/profile.tsx",
      "parent": "/_basic-layout"
    },
    "/_basic-layout/stress-testing": {
      "filePath": "_basic-layout/stress-testing.tsx",
      "parent": "/_basic-layout"
    },
    "/_basic-layout/": {
      "filePath": "_basic-layout/index.tsx",
      "parent": "/_basic-layout"
    }
  }
}
ROUTE_MANIFEST_END */
