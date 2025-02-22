import { ThemeProvider as NextThemesProvider } from "next-themes"

const Provider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
};

export default Provider
