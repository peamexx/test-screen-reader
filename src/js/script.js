$(document).ready(function () {
    $('#table1').DataTable({
        ajax: '/data/dataSet.json',
        columns: [
            {
                data: 'case',
                className: 'openModal'
                // render: function(data, type) {
                //     return '<p title="">' + data + '</p>'
                // }
            },
            {data: 'state'},
            {data: 'text'},
            {data: 'tag'},
        ],
        columnDefs: [
            {
                target: 3,
                visible: false,
            },
        ],
    });
});

$('table').on('click', '.openModal', function() {
    const t = $(this).parents('table').DataTable();
    alert(t.row(this).data().tag)
});