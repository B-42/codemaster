<script>
    import '../app.css';
    import {window} from '$lib/stores.js';
    import {page} from '$app/stores';
    import { base } from '$app/paths';

    const subpages = [
        "about"
    ]
    
    let width, height, isMobile;

    $: {
        if(width <= 750) isMobile = true;
        else isMobile = false;

        window.set({width, height, isMobile});
    }

    //page.subscribe(val => console.log(val.route.id))
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>
<body style={`height: calc(${height}px - 2rem)`}>
    <header>
        <div class="flex center space-between">
            <nav class="flex center">
                <div style="flex-grow: 6; text-align: left; margin-left: 1rem;">
                    <a href={base} class={
                        $page.route.id==base || $page.route.id=='/'?'current':''
                    }>Home</a>
                </div>
                <div class="flex space-between" style="text-align: right; margin-right: 1rem;">
                    {#each subpages as subpage, i}
                        <div>
                            <a href={base+"/"+subpage} class={
                                $page.route.id==base+'/'+subpage || $page.route.id=='/'+subpage ? 'current' : ''
                            }>{subpage}</a>
                        </div>
                        {#if i < subpages.length - 1}
                            <hr>
                        {/if}
                    {/each}
                </div>
            </nav>
        </div>
    </header>
    <hr>
    <main>
        <slot></slot>
    </main>
    <footer>
    </footer>
</body>

<style>
    nav {
        width: 100%;
        height: 4vh;
    }
    nav div {
        flex-grow: 1;
    }
    nav hr {
        height: 1rem;
        margin: .1rem;
    }
    body {
        position: fixed;
        left: 0; top: 0;
        width: calc(100vw - 2rem); /*height: calc(100vh - 2rem - var(--toolbar-height));*/
        overflow: auto;
        padding: 0rem;
        margin: 1rem;
    }
    .current {
        text-decoration: white wavy underline;
    }
    :root {
        --toolbar-height: 10vh;
    }
</style>