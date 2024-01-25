
export interface ICategoryProps {
  params:{
    categories: string[],

  }
  searchParams?: string
}

 const Category = (props: ICategoryProps) => {
  console.log(props)
  const {categories} = props.params
  return (
    <div>
      Dynamic Category {categories}
    </div>
  );
}
 export default Category

