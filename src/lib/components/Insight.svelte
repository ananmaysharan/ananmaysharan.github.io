<script lang="ts">
    interface Props {
        text?: string;
    }

    let { text = "" }: Props = $props();
</script>

<div class="flex items-start bg-white border border-[#ddd] p-4 hover:bg-bg-hover hover:cursor-pointer">
    <p class="not-prose font-serif p-0 m-0">{text}</p>
</div>
