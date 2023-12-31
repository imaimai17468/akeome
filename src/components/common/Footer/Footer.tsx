export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-start justify-center p-2 text-sm text-white">
      <p>Build by かろ噴水</p>
      <div className="flex gap-1">
        <p>The source code is available on </p>
        <a
          href="https://github.com/imaimai17468/akeome"
          rel="noreferrer noopener"
          className="border-b"
        >
          GitHub.
        </a>
      </div>
    </footer>
  );
};
