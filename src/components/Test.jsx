export default function Test() {
  let gabs = [
    [1, 2, 3, 4],
    ["s", "d", 5],
  ];

  let newgabs = [...gabs];
  // let newgabs = gabs;
  newgabs[0] = [8, 9];
  console.log(gabs);

  return (
    <div className="gabs">
      {/* {gabs.map((data, ind) => (
        <li>
          {data + " "}
          {ind}
        </li>
      ))} */}
      {newgabs}
    </div>
  );
}
