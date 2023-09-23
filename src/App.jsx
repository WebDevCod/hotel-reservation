import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route } from "wouter";
import { Toaster } from "react-hot-toast";

const client = new QueryClient();

function App() {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <QueryClientProvider client={client}>      
          <Route path="/" component={HotelList} />
          <Route path="/hotel/:id" component={HotelDetails} />       
      </QueryClientProvider>
    </>
  );
}

export default App;
