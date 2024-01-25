
export interface CategoryProps {
  params:{
    category: string
  }
}

export default function Category (props: CategoryProps) {

  const {category} = props.params
  console.log(category);
  return (
    <div>
      Dynamic Category {category}
    </div>
  );
}
