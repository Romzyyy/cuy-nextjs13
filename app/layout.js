export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Dea freeCourse main page</title>
      </head>
      <body>
        <nav>
          <a href="/">home</a>
          <a href="/postingan">postingan</a>
        </nav>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
