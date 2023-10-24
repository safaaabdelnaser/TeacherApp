import AddTeacher from "../../Components/teacherComp/addTeacher";
import CategoryClasses from "../../Components/teacherComp/categoryClasses";
import SingleTeacher from "../../Components/teacherComp/singleTeacher";
import teacher1 from "../../assets/images/Ellipse 1172.png";
import teacher2 from "../../assets/images/Ellipse 1173.png";
import { MdOutlineScience } from "react-icons/md";
import { BiMath } from "react-icons/bi";
const Teachers = () => {
  const dataItems = [
    {
      image: teacher1,
      TeacherName: "أحمد",
      classTeacher: "الاول",
      Category: "العلوم",
      iconClass: <MdOutlineScience />,
    },
    {
      image: teacher2,
      TeacherName: "محمد",
      classTeacher: "الثانى",
      Category: "الرياضيات",
      iconClass: <BiMath />,
    },
    {
        image: teacher1,
        TeacherName: "خالد",
        classTeacher: "الثالث",
        Category: "الرياضيات",
        iconClass: <MdOutlineScience />,
      },
      {
        image: teacher2,
        TeacherName: "سيف",
        classTeacher: "الرابع",
        Category: "العلوم",
        iconClass: <BiMath />,
      },
  ];

  return (
    <>
      {/* section science */}
      <div>
        {dataItems.length > 0 && (
          <CategoryClasses
            key={0}
            Category={dataItems[0].Category}
            iconClass={dataItems[0].iconClass}
          />
        )}
        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3 mt-7">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-10">
            {dataItems
              .filter((item) => item.Category === "الرياضيات")
              .map((item, index) => (
                <SingleTeacher
                  key={index}
                  image={item.image}
                  TeacherName={item.TeacherName}
                  classTeacher={item.classTeacher}
                />
              ))}
            <AddTeacher />
          </div>
        </section>
      </div>

      <hr className="my-6" />

      {/* section math */}
      <div>
        {dataItems.length > 0 && (
          <CategoryClasses
            key={1}
            Category={dataItems[1].Category}
            iconClass={dataItems[1].iconClass}
          />
        )}
        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3 mt-7">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-10">
            {dataItems
              .filter((item) => item.Category === "العلوم")
              .map((item, index) => (
                <SingleTeacher
                  key={index}
                  image={item.image}
                  TeacherName={item.TeacherName}
                  classTeacher={item.classTeacher}
                />
              ))}
            <AddTeacher />
          </div>
        </section>
      </div>
    </>
  );
};

export default Teachers;
