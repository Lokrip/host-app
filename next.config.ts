import NextFederationPlugin from "@module-federation/nextjs-mf";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
//   webpack: (config, options) => {
//     const { isServer } = options;
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'host',
//         remotes: {// this will contain remote route
//           remoteApp: `remoteApp@http://localhost:3001/_next/static/${
//             isServer ? 'ssr' : 'chunks'
//           }/remoteEntry.js`,
//         },
//         filename: 'static/chunks/remoteEntry.js',
//         exposes: {
//         },
//         shared: {
//           react: {
//             singleton: true,
//             eager: true,
//             requiredVersion: false,
//           },
//           'react-dom': {
//             singleton: true,
//             eager: true,
//             requiredVersion: false,
//           },
//         },
//         extraOptions: {}
//       }),
//     );

//     return config
//   }
};

export default nextConfig;
