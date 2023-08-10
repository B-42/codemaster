<script>
    import RiddleView from "$lib/components/RiddleView.svelte";
    import {generateRiddle, generateRiddleMulti} from '$lib/solver+gen.js';

    let resultObj={}, codeLength=3, base=10, status=0, statusClass='', statusMessage='';

    const statusProps = [
        {   // 0 = none
            class: 'status-none',
            message: ''
        },
        {   // 1 = waiting
            class: 'status-waiting',
            message: '...'
        },
        {   // 2 = finished
            class: 'status-finished',
            message: 'finished'
        },
        {   // 3 = failed
            class: 'status-failed',
            message: 'failed, try again'
        }
    ];

    function handleGenerate() {
        status = 1;
        const NUM_WORKERS = 16;
        let finishedWorkers = 0;

        generateRiddleMulti({
            codeLength,
            base
        }, NUM_WORKERS, resultObj, () => {
            resultObj = resultObj;
            finishedWorkers++;
            
            if(resultObj.riddle) status = 2;
            else if(finishedWorkers == NUM_WORKERS) status = 3;
        });
    }

    $: {
        statusClass = statusProps[status].class;
        statusMessage = statusProps[status].message;
    }
</script>

<RiddleView showControls={true} fileSettings={{import:false, export:true}} bind:codeLength={codeLength} bind:base={base} bind:riddle={resultObj.riddle}>
    <div slot="header">
        <button on:click={handleGenerate}>generate</button>
        <p style='opacity: 80%; font-size: .85rem; margin: 0;'>
            <span class={statusClass}>
                {statusMessage}
            </span>
        </p>
    </div>
</RiddleView>