import AuthProvider from "./src/context/AuthProvider";
import Navigation from "./src/navigation/navigation";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </Provider>
  );
}
