import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className=" text-white font-bold hover:bg-[#ff6529] w-fit">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png" />
              <AvatarFallback></AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l border-solid border-secondary p-5">
          <p className="text-sm">Abril</p>
          <p className="text-2xl font-bold">22</p>
          <p className="text-sm">9:29</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
