const vaga = {
  language: 'java',
  courses: ['information systems', 'programming'],
  minimum_working_years: 3,
  minimum_gratuated_years: 4,
};
const candidatos = [
  {
    name: 'JONES',
    course: 'information systems',
    languages: ['c++', 'javascript', 'haskel'],
    last_years_working: '01110',
    graduate_date: 1289223023000,
  },
  {
    name: 'JONES',
    course: 'ruby',
    languages: ['c++', 'c', 'haskel'],
    last_years_working: '01010',
    graduate_date: 1289223023000,
  },
];

const today_date = 1517577684000;

const filterCandidates = (opportunity, candidatesArray) => {
  let listCandidatesArray = candidatesArray.map((candidates) => {
    let year = 31536000000 * opportunity.minimum_gratuated_years;
    let working_years = candidates.last_years_working
      .split('')
      .filter((number) => number === '1');

    let gratuated_years = candidates.graduate_date;

    let result = today_date =! gratuated_years;

    if (
      working_years.length > opportunity.minimum_working_years &&
      result > year
    ) {
      return candidates.name;
    }
  });

  return listCandidatesArray.filter((data) => data != null);
};

function selectCandidates(opportunity, candidatesArray) {
  let listCandidatesArray = candidatesArray.map((candidates) => {
    let langage = candidates.languages.filter(
      (lang) => lang === opportunity.language
    );

    let course = opportunity.courses.filter(
      (courser) => courser === candidates.course
    );

    if (course.length > 0 || langage.length > 0) {
      return candidates.name;
    }
  });

  return listCandidatesArray.filter((data) => data != null);
}

// console.log(selectCandidates(vaga, candidatos));

console.log(filterCandidates(vaga, candidatos));
