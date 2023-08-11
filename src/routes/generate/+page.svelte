<script>
    import RiddleView from "$lib/components/RiddleView.svelte";
    import {generateRiddleMulti} from '$lib/solver+gen.js';

    let codeLength=3, base=10, statusClass='', statusMessage='';
    
    const NUM_WORKERS = 8,
        workerManager = {
            numWorkers: NUM_WORKERS, workers: [], finishedWorkers: 0,
            onupdate: () => {
                resultObj = resultObj;
            }
        };
    
    workerManager.reset = () => {
        while(workerManager.workers.length)
            workerManager.workers.pop().terminate();
        workerManager.finishedWorkers = 0;
    }
    
    let resultObj = {status: 0};

    const statusProps = [
        {   // 0 = none
            class: 'status-none',
            message: ''
        },
        {   // 1 = waiting
            class: 'status-waiting',
            message: 'working...'
        },
        {   // 2 = finished
            class: 'status-done',
            message: 'done'
        },
        {   // 3 = failed
            class: 'status-failed',
            message: 'failed. try again'
        }
    ];

    function handleGenerate() {
        generateRiddleMulti({
            codeLength,
            base
        }, resultObj, workerManager);
    }

    $: {
        statusClass = statusProps[resultObj.status].class;
        statusMessage = statusProps[resultObj.status].message;
    }
</script>

<RiddleView showControls={true} fileSettings={{import:false, export:true}}
bind:codeLength={codeLength} bind:base={base} bind:riddle={resultObj.riddle}>
    <div slot="header">
        <button on:click={handleGenerate}>generate</button>
        <p style='opacity: 80%; font-size: .85rem; margin: .1rem;'>
            <span class={statusClass} style='transition: 0s;'>
                {statusMessage}
            </span>
        </p>
    </div>
</RiddleView>

<style>
    @keyframes shake-horizontal {
        from {margin-left: -.2rem;}
        to {margin-left: .2rem;}
    }

    @keyframes shake-vertical {
        from {margin-bottom: -.2rem;}
        to {margin-bottom: .2rem;}
    }

    .status-waiting {
        animation: shake-horizontal linear .1s infinite alternate-reverse;
    }

    .status-done {
        color: limegreen;
    }

    .status-failed {
        animation: shake-vertical linear .1s alternate-reverse 5;
        color: red;
    }
</style>