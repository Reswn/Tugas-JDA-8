import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Konfigurasi NextAuth
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in", // Halaman login kustom
    error: "/auth/error", // Opsional: halaman error
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard`; // Redirect setelah login berhasil
    },
  },
};

// Handler GET & POST untuk NextAuth
const handler = NextAuth(authOptions);

// ✅ Untuk App Router (Next.js 13/14)
export { handler as GET, handler as POST };
