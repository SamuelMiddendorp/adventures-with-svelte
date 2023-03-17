<script lang="ts">
    interface FieldProps{
        name: string,
        label: string,
        type: string,
        onValue: (value: string) => void
    }
    function update(e: Event){
        let event = e.target as HTMLInputElement
        props.onValue(event.value)
    }
    export let props: FieldProps; 
</script>
<body>
    <label for={props.name}>{props.label}</label>
    <input type={props.type} name={props.name} on:input={update} />
</body>