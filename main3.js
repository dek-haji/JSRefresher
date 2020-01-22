//DOM using Query selector
const createStudentComponent = () => {
    return `
        <div class="student">
            <h1>Ahmed Haji</h1>
            <section>Day cohort 32</section>
            <aside>
                Wore pants that were too short for his legs.
                Was an incredible friend to his teammates.
            </aside>
            <button> Click </button>
        </div>
    `
}
const studentContainer = document.querySelector("#container")
studentContainer.innerHTML = createStudentComponent();



const createStudentComponent1 = (name, subject, info) => {
    studentContainer.innerHTML += `
    <div class="student">
        <h1>${name}</h1>
        <section>${subject}</section>
        <aside>${info}</aside>
    </div>`
}
createStudentComponent1("Dek", "Day cohort40", "in love of coding and NSS")

