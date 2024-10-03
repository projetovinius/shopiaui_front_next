import { AuthContext } from "@/contexts/AuthContext"
import useGetCategoriesQuery from "@/hooks/queries/useGetCategoriesQuery"
import { useContext } from "react"
import {categoriesData} from "../../../mock/category_mock"

export default function CategoriasTypes(){

    return(
        <div className="mt-11 mb-11">
            <p className="font-bold text-center text-[20px] mb-9">Categorias</p>
            <div className="w-[100%] flex items-center justify-evenly">
                {
                    categoriesData.map((category) => (
                            <div className="rounded-full bg-slate-300 w-24 h-24 transition duration-300 transform hover:scale-110 cursor-pointer">{category.name}</div>
                    ))
                }
            </div>
        </div>
    )
}