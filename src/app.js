<<<<<<< HEAD

=======
>>>>>>> 34a9183771a7c26b69347d0fb8a6fd422d8892eb
document.addEventListener('DOMContentLoaded',() =>{
    const addContentForm = document.querySelector('.new-contact-form')

    addContentForm.addEventListener('submit', event => {
        event.preventDefault()
<<<<<<< HEAD
=======
        const storage = window.localStorage
>>>>>>> 34a9183771a7c26b69347d0fb8a6fd422d8892eb
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
<<<<<<< HEAD
    })
})
=======
        storage.setItem('contacts', JSON.stringify([contact]))
    })
})
>>>>>>> 34a9183771a7c26b69347d0fb8a6fd422d8892eb
