YourDataApp

YourData it´s a simply App where you can create a profile throw two differents forms.
First you will be welcome to the App and when you will be ready to start, you will find the first form to fill in your personal data. After that and only when you fill in all the fields you will pass to the profesional data form where you can add your role, experience and a maximum of five skills.

When you finish the second form you will find the profile with your details and a nice random avatar.

You can check this App at: https://form-data-app.netlify.app/

--- DOCS ---

To build this App have been used the following TECNOLOGIES:

- HTML5

- CSS3: Each component has his own .css file to make the component reusable and independent. To fix and align the page it´s used display flex.

- JavaScript: With the last version ECMAScript 6 (arrow function, destructuring, template strings... )

- React, with ESlint like lintener.

- Displayed in Netlify throw Github: https://form-data-app.netlify.app/

ESTRUCTURE

> public
>
> > icons folder
>
> > images folder

> src:
>
> > components
>
> > > component name folder
>
> > > > component-name.js
> > > > component-name.css
>
> > store
>
> > > context folder
>
> > > > context-name.js
> > > > context-name-provider.js
>
> > App.js
>
> > App.css
>
> > index.js
>
> > index.css

Like it´s a simple App with two forms and a profile, has an easy estructure where we have a two main folders:

PUBLIC

Where we can find the index.html (metadata, title, description...)

Also there are two folders where we can storage the pictures (images folder) and icons (icons folder).

SRC

- Components: We find the different components in their respective folder, all of them have his own file .js and .css, to use it independently in case will be necessary.

- Store. This App use the context to supply the components. For this it has been added to the index.js the ContextProvider, so the whole App has access to the Context data.

INDEX

- index.js: We includ the App component wrapped with the ContextProvider.

- index.css: We includ here the main styles for the App.

CONTEXT / STATES

Like explained before, the context it´s our store, it make available to the rest of the components the diferents states. There are three main states for the develop of the appliaction:

- formState: it´s a meter that depending on it´s value the App will show the diferents components. It´s a function similar like a router.

- profileUser: it´s an object, his properties have the data of the user, that will be storage throw the forms. Special mention to theproperty avatar, this it´s random generated with the API: avatars.dicebear.

- skills: An array where we will included the diferents values (maximum 5) at the profesionalDataForm. This array value it´s asigned to the same property name at profileUser.

Apart from this states that the Context supply, each component can have his own states and functions, that also can be supplied to the sons components throw the props.
