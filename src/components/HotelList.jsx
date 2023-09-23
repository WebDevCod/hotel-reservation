import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const fetchHotels = async () => {
  const res = await fetch("http://localhost:3001/hotels");
  if (!res.ok) {
    throw new Error("Network response was not OK");
  }
  return res.json();
};

function HotelList() {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching Hotels {error.message}</div>;
  }

  return (
    <>
      <Typography variant="h4" component="h2">
        Booking App
      </Typography>
      <Stack spacing={2}>
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            sx={{ maxWidth: 345, backgroundColor: "#e8e8e8" }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={hotel.image}
              title={hotel.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={`/hotel/${hotel.id}`}>
                See Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default HotelList;
