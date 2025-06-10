<template>
    <div class="flex align-baseline">
        <id-field
            :resource="resource"
            :resource-name="resourceName"
            :field="field"
        />
        <button
            @click.stop="copy"
            class="ml-2 opacity-50"
            title="Copy to clipboard"
        ><copy-icon class="w-4 h-4" /></button>
    </div>
</template>

<script>
import IdField from '@/fields/Index/IdField.vue'
import CopyIcon from "./CopyIcon.vue";

export default {
    props: ['resource', 'resourceName', 'field'],
    components: {IdField, CopyIcon},
    methods: {
        copy() {
            if (navigator.clipboard.writeText(this.resource.id.value)) {
                Nova.success(this.resource.id.value + ' copied to clipboard.');
            }
        }
    }
}
</script>
