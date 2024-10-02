import PrivateRoute from "@/components/PrivateRouter";


export default function Home() {
  return (
    <PrivateRoute>
      <p></p>
    </PrivateRoute>
  );
}
