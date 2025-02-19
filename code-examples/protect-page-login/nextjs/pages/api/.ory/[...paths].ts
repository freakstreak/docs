// Copyright © 2022 Ory Corp
// SPDX-License-Identifier: Apache-2.0

// @ory/integrations offers a package for integrating with Next.js.
import { config, createApiHandler } from "@ory/integrations/next-edge"

// We need to export the config.
export { config }

// And create the Ory Network API "bridge".
export default createApiHandler({
  fallbackToPlayground: true,
})
