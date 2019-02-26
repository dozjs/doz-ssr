import Doz from 'doz'
import 'doz-router'

Doz.component('home-page', {
    template() {
        return `
                <div>I'm home page</div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('about-page', {
    template() {
        return `
                <div>I'm about page</div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('extension-page', {
    template() {
        return `
                <div>I'm .html page</div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('contact-page', {
    template() {
        return `
                <div>I'm contact page</div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    },
    onMount() {
        localStorage.setItem('avaia', 'hello');
        location.href= '/'
    }
});

Doz.component('profile-page', {
    template() {
        return `
                <div>I'm profile me page</div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('user-details-page', {
    template() {
        return `
                <div>I'm user page with id "${this.props.id}", <a href="javascript:history.back()">back</a></div>
            `
    },
    onCreate() {
        this.props.id = this.router.param('id');
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('search-page', {
    template() {
        return `
                <div>I'm search page with query "${this.props.query}"</div>
            `
    },
    onCreate() {
        this.props.query = this.router.query('t');
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('user-page', {
    template() {
        return `
                <div>I'm user page index, <a href="/user/10">show id 10</a></div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('section-page', {
    template() {
        let id = this.router.param('id');
        return `
                <div>I'm section page index ${id}</div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('not-found-page', {
    template() {
        return `
                <div>404 page not found</div>
            `
    },
    onCreate() {
        console.log(this.tag, 'created')
    },
    onDestroy() {
        console.log(this.tag, 'destroyed')
    }
});

Doz.component('navigate-buttons', {
    template() {
        return `
                <div>
                    <button onclick="this.router('/about')">About</button>
                    <button onclick="this.router('/profile/me')">Profile</button>
                    <button onclick="this.router('/search/?t=hello')">Search hello</button>
                </div>
            `
    }
});

new Doz({
    root: '#app',
    template: `
            <div class="container">
                <nav>
                    <a data-router-link href="/">Home</a> |
                    <a data-router-link href="/about">About</a> |
                    <a data-router-link href="/profile/me">Profile</a> |
                    <a data-router-link href="/profile.html">.html</a> |
                    <a data-router-link href="/user/">User</a> |
                    <a data-router-link href="/search/?t=hello">Search hello</a> |
                    <a data-router-link href="/search/?t=ciao">Search ciao</a> |
                    <a data-router-link href="/contact">Contact</a> |
                    <a data-router-link href="/not-found-page-bla-bla">Not found</a> |
                    <a data-router-link href="/section/1">Section 1</a> |
                    <a data-router-link href="/section/2">Section 2</a> |
                    <a data-router-link href="/section/3">Section 3</a> |
                    <a data-router-link href="/section/4">Section 4</a>
                </nav>
                <navigate-buttons></navigate-buttons>
                <doz-router mode="history">
                    <home-page route="/"></home-page>
                    <about-page route="/about"></about-page>
                    <contact-page route="/contact"></contact-page>
                    <extension-page route="/profile.html"></extension-page>
                    <profile-page route="/profile/me"></profile-page>
                    <search-page route="/search"></search-page>
                    <user-page route="/user/"></user-page>
                    <user-details-page route="/user/:id"></user-details-page>
                    <not-found-page route="*"></not-found-page>
                    <section-page route="/section/:id" preserve></section-page>
                </doz-router>
            </div>
        `
});