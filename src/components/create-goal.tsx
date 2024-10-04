import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from "./ui/radio-group";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose asChild>
              <X className="size-5" />
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>
        <form action="" className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade?</Label>
              <Input
                id="title"
                placeholder="Praticar exercícios, meditar, etc..."
                autoFocus
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Quantas vezes na emana</Label>
              <RadioGroup>
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span>1x na semana</span>
                  <span>🥱</span>
                </RadioGroupItem>
                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span>2x na semana</span>
                  <span>🙂</span>
                </RadioGroupItem>
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span>3x na semana</span>
                  <span>😎</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button type="button" className="flex-1" variant="secondary">
                Fechar
              </Button>
            </DialogClose>

            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}
