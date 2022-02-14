import * as React from "react";

function SvgCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.2 32.9" {...props}>
      <path d="M29 26H7c-.3 0-.6-.2-.8-.4s-.2-.6-.1-.9L8 19.9 6.1 2H0V0h7c.5 0 .9.4 1 .9l2 19c0 .2 0 .3-.1.5L8.5 24H30l-1 2z" />
      <path d="M9.2 21l-.4-2L32 14.2V6H8V4h25c.6 0 1 .4 1 1v10c0 .5-.3.9-.8 1l-24 5zM30 32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 32c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

export default SvgCart;
