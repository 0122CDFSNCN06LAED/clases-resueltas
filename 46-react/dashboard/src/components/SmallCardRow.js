import SmallCard from "./SmallCard";

const statistics = [
  {
    title: "Movies in database",
    value: 21,
    icon: "fa-film",
    color: "primary",
  },
  {
    title: "Total awards",
    value: 79,
    icon: "fa-award",
    color: "success",
  },
  {
    title: "Actors quantity",
    value: 49,
    icon: "fa-user",
    color: "warning",
  },
];

function SmallCardRow() {
  return (
    <div className="row">
      {statistics.map((stat) => {
        return <SmallCard key={stat.title} {...stat} />;
      })}
    </div>
  );
}

export default SmallCardRow;
