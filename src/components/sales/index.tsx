import { CircleDollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimas Vendas
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>

        <CardDescription>Total de vendas no período de 24h</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/giovanicerejobrasil.png" />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>

          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-base font-semibold">
                Giovani Brasil
              </p>
              <span className="text-sm font-medium text-gray-800">
                R$ 1997,21
              </span>
            </div>
            <span className="text-[12px] font-light text-gray-500">
              giovani.brasil@gmail.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <p className="text-sm sm:text-base font-semibold">
                Luanna Paixão
              </p>
              <span className="text-sm font-medium text-gray-800">
                R$ 253,44
              </span>
            </div>
            <span className="text-[12px] font-light text-gray-500">
              luanna.paixao@gmail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
