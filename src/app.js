const storage = window.localStorage

const renderContacts = () => {
  const contacts = JSON.parse(storage.getItem('contacts'))
  let div = document.querySelector('.contact-list')
  if (contacts) {
    div.innerHTML = ''
    const ul = document.createElement('ul')
    contacts.forEach(contact => {
      let contactcard = document.createElement('contactcard')
        contactcard.innerHTML = `
            <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden mt-6 py-6">
                <div class="sm:flex sm:items-center px-6 py-4">
                    <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="">
                    <div class="text-center sm:text-left sm:flex-grow">
                        <div class="mb-4">
                            <p class="text-xl leading-tight">${ contact.name }</p>
                            <p class="text-m leading-tight text-grey-dark">${ contact.company}</p>
                            <p class="text-s leading-tight text-grey-dark">${ contact.notes}</p>
                            <p class="text-sm leading-tight text-grey-dark">${ contact.email}</p>
                            <a class="text-sm leading-tight text-grey-dark" href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
                        </div>
                    </div>
                    <div>
                        <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
                    </div>
                </div>
            </div>
    `
    ul.appendChild(contactcard)
    })
    div.appendChild(ul)
  } else {
    div.innerHTML = '<p>You have no contacts in your address book</p>'
  }
}

  document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const addContactForm = document.querySelector('.new-contact-form')
   
    addContactForm.addEventListener('submit', event => {
      event.preventDefault()
      
  
      const {
        name,
        email,
        phone,
        company,
        notes,
        twitter,
      } = addContactForm.elements
  
      const contact = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        phone: phone.value,
        company: company.value,
        notes: notes.value,
        twitter: twitter.value,
      }
      console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
      let contacts = JSON.parse(storage.getItem('contacts')) || []
      contacts.push(contact)
      storage.setItem('contacts', JSON.stringify(contacts))
      renderContacts()
      addContactForm.reset()
  })
  })

