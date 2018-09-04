document.addEventListener('DOMContentLoaded',() =>{
    const addContentForm = document.querySelector('.new-contact-form')

    addContentForm.addEventListener('submit', event => {
        event.preventDefault()
        const storage = window.localStorage
        const {
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContentForm.elements

        const contact = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }
        
        console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
        storage.setItem('contacts', JSON.stringify([contact]))
    })
})
