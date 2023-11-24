<template>
  <div class="mx-4">
    <!-- TODO: Data dashboard laten zien -->
    <div class="relative flex">
      <span class="text-xl">Overzicht afwijkingen</span>
    </div>
    <div class="relative my-4">
      <table class="border-collapse border border-slate-500 table-auto">
        <thead>
        <tr class="bg-blue-400">
          <th class="border border-slate-600 text-slate-100 p-2">Snelweg</th>
          <th class="border border-slate-600 text-slate-100 p-2">HM-Paal van</th>
          <th class="border border-slate-600 text-slate-100 p-2">HM-Paal tot</th>
          <th class="border border-slate-600 text-slate-100 p-2">Waarschuwing</th>
          <th class="border border-slate-600 text-slate-100 p-2">Aantal dagen afwijkend</th>
          <th class="border border-slate-600 text-slate-100 p-2">Afwijkend van</th>
          <th class="border border-slate-600 text-slate-100 p-2">Afwijkend tot</th>
          <th class="border border-slate-600 text-slate-100 p-2">Info</th>
        </tr>
        </thead>
        <tbody>
        <tr class="even:bg-slate-200 odd:bg-white" v-for="(row,i) in rows" :key="i">
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.snelweg }}</td>
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.hm_paal_van }}</td>
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.hm_paal_tot }}</td>
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.waarschuwing }}</td>
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.aantal_dagen_afwijkend }}</td>
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.afwijkend_van }}</td>
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.afwijkend_tot }}</td>
          <td class="border border-slate-600 text-slate-1000 p-2">{{ row.info }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      colums:[
        {
          label: 'Snelweg',
          field: 'snelweg'
        },
        {
          label: 'HM Paal van',
          field: 'hm-paal-van'
        },
        {
          label: 'HM Paal tot',
          field: 'hm-paal-tot'
        },
        {
          label: 'Waarschuwing',
          field: 'waarschuwing'
        },
        {
          label: 'Aantal dagen afwijkend',
          field: 'aantal-dagen-afwijkend'
        },
        {
          label: 'Afwijkend van',
          field: 'afwijkend-van'
        },
        {
          label: 'Afwijkend tot',
          field: 'afwijkend-tot'
        },
        {
          label: 'Info',
          field: 'info'
        }

      ],
      rows: [{"snelweg":"SRO","hm_paal_van":19,"hm_paal_tot":83,"waarschuwing":true,"aantal_dagen_afwijkend":78,"afwijkend_van":"22/03/2023","afwijkend_tot":"28/03/2023","info":"edu"},
        {"snelweg":"ULV","hm_paal_van":77,"hm_paal_tot":25,"waarschuwing":false,"aantal_dagen_afwijkend":86,"afwijkend_van":"25/12/2022","afwijkend_tot":"06/06/2023","info":"biz"},
        {"snelweg":"ALI","hm_paal_van":95,"hm_paal_tot":97,"waarschuwing":true,"aantal_dagen_afwijkend":null,"afwijkend_van":"12/04/2023","afwijkend_tot":"31/03/2023","info":"com"},
        {"snelweg":"GLG","hm_paal_van":26,"hm_paal_tot":97,"waarschuwing":true,"aantal_dagen_afwijkend":null,"afwijkend_van":"22/11/2022","afwijkend_tot":"26/08/2023","info":"edu"},
        {"snelweg":"SMG","hm_paal_van":9,"hm_paal_tot":61,"waarschuwing":false,"aantal_dagen_afwijkend":null,"afwijkend_van":"28/06/2023","afwijkend_tot":"18/12/2022","info":"edu"},
        {"snelweg":"VBS","hm_paal_van":11,"hm_paal_tot":8,"waarschuwing":false,"aantal_dagen_afwijkend":null,"afwijkend_van":"10/01/2023","afwijkend_tot":"27/07/2023","info":"info"},
        {"snelweg":"KLX","hm_paal_van":91,"hm_paal_tot":68,"waarschuwing":false,"aantal_dagen_afwijkend":29,"afwijkend_van":"16/04/2023","afwijkend_tot":"08/04/2023","info":"gov"},
        {"snelweg":"DRH","hm_paal_van":58,"hm_paal_tot":99,"waarschuwing":true,"aantal_dagen_afwijkend":null,"afwijkend_van":"29/09/2023","afwijkend_tot":"08/12/2022","info":"info"},
        {"snelweg":"TJB","hm_paal_van":91,"hm_paal_tot":36,"waarschuwing":false,"aantal_dagen_afwijkend":63,"afwijkend_van":"07/08/2023","afwijkend_tot":"24/07/2023","info":"name"},
        {"snelweg":"MTJ","hm_paal_van":32,"hm_paal_tot":90,"waarschuwing":false,"aantal_dagen_afwijkend":76,"afwijkend_van":"25/06/2023","afwijkend_tot":"15/05/2023","info":"net"},
        {"snelweg":"ADB","hm_paal_van":45,"hm_paal_tot":72,"waarschuwing":false,"aantal_dagen_afwijkend":60,"afwijkend_van":"15/06/2023","afwijkend_tot":"15/05/2023","info":"com"},
        {"snelweg":"MEB","hm_paal_van":25,"hm_paal_tot":54,"waarschuwing":true,"aantal_dagen_afwijkend":71,"afwijkend_van":"15/09/2023","afwijkend_tot":"08/11/2023","info":"name"},
        {"snelweg":"YCM","hm_paal_van":11,"hm_paal_tot":89,"waarschuwing":false,"aantal_dagen_afwijkend":44,"afwijkend_van":"25/06/2023","afwijkend_tot":"29/06/2023","info":"info"},
        {"snelweg":"SVW","hm_paal_van":57,"hm_paal_tot":20,"waarschuwing":false,"aantal_dagen_afwijkend":null,"afwijkend_van":"13/07/2023","afwijkend_tot":"01/01/2023","info":"name"},
        {"snelweg":"FAQ","hm_paal_van":64,"hm_paal_tot":84,"waarschuwing":false,"aantal_dagen_afwijkend":46,"afwijkend_van":"30/12/2022","afwijkend_tot":"24/05/2023","info":"net"}]
    }
  }
}
</script>

<style scoped>

</style>