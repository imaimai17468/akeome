export const Footer = () => {
  return (
    <footer className="flex items-start justify-center w-full p-2 border-t text-white text-sm flex-col">
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
