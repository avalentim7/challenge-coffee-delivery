import Americano from "../../assets/Americano.svg";
import Arabe from "../../assets/Arabe.svg";
import CafeComLeite from "../../assets/CafeComLeite.svg";
import CafeGelado from "../../assets/CafeGelado.svg";
import Capuccino from "../../assets/Capuccino.svg";
import ChocolateQuente from "../../assets/ChocolateQuente.svg";
import Cubano from "../../assets/Cubano.svg";
import Expresso from "../../assets/Expresso.svg";
import ExpressoCremoso from "../../assets/ExpressoCremoso.svg";
import Havaiano from "../../assets/Havaiano.svg";
import Irlandes from "../../assets/Irlandes.svg";
import Latte from "../../assets/Latte.svg";
import Macchiato from "../../assets/Macchiato.svg";
import Mocaccino from "../../assets/Mocaccino.svg";

export interface ProductsListProps {
  id: string;
  name: string;
  description: string;
  price: string;
  categories: Array<string>;
  img: string;
}

export const ProductsList = [
  {
    id: "expresso-tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
    categories: ["Tradicional"],
    img: Expresso,
  },
  {
    id: "expresso-americano",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
    categories: ["Tradicional"],
    img: Americano,
  },
  {
    id: "expresso-cremoso",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
    categories: ["Tradicional"],
    img: ExpressoCremoso,
  },
  {
    id: "expresso-gelado",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
    categories: ["Tradicional", "Gelado"],
    img: CafeGelado,
  },
  {
    id: "cafe-com-leite",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
    categories: ["Tradicional", "Com Leite"],
    img: CafeComLeite,
  },
  {
    id: "latte",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
    categories: ["Tradicional", "Com Leite"],
    img: Latte,
  },
  {
    id: "capuccino",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
    categories: ["Tradicional", "Com Leite"],
    img: Capuccino,
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
    categories: ["Tradicional", "Com Leite"],
    img: Macchiato,
  },
  {
    id: "mocaccino",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
    categories: ["Tradicional", "Com Leite"],
    img: Mocaccino,
  },
  {
    id: "chocolate-quente",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90",
    categories: ["Especial", "Com Leite"],
    img: ChocolateQuente,
  },
  {
    id: "cubano",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
    categories: ["Especial", "Alcoólico", "Gelado"],
    img: Cubano,
  },
  {
    id: "havaiano",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
    categories: ["Especial"],
    img: Havaiano,
  },
  {
    id: "arabe",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
    categories: ["Especial"],
    img: Arabe,
  },
  {
    id: "irlandes",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
    categories: ["Especial", "Alcoólico"],
    img: Irlandes,
  },
];
