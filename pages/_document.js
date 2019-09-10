import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta name='description' content='Ilam ki roshni' />
          <meta charSet='utf-8' />
          <meta name='robots' content='index, follow' />
          <meta name='viewport' content='width=device-width' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto'
            rel='stylesheet'
          />
          <link
            href='http://ilam-staging.herokuapp.com/static/css/main.eddb0238.chunk.css'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </html>
    );
  }
}
