import { Html, Head, Main, NextScript } from 'next/document'
import CustomScripts from '@/componants/CustomScripts'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.2.3/materia/bootstrap.min.css" integrity="sha512-BHK6ttFyaq4IZg5NXAhqbkjOGo5fA4HMhOK9UA9MsYCGWp7QCxv1zZKNrNNzezh0jeQxk+FRC5TeKMxUrrTzrQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <CustomScripts />
      </body>
    </Html>
  )
}
