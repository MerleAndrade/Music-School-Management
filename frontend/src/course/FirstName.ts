export type FirstName = {
    id: string,
    firstNameTeacher: string,
}
export type NewFirstName = Omit<FirstName, "id">