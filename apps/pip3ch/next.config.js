//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  /**
 * Enable static exports.
 *
 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
 */
  output: "export",
  /**
 * Disable server-based image optimization. Next.js does not support
 * dynamic features with static exports.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
 */
  images: {
    unoptimized: true,
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
