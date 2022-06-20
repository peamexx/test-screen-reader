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
            {
                data: 'state',
                className: 'stateIcon',
                render: function(data) {
                    if(data == -1) {
                        return '<img src="/src/images/svg/warning.svg" />'
                    } else if(data == 0) {
                        return '<img src="/src/images/svg/not-pass.svg" />'
                    } else if(data == 1) {
                        return '<img src="/src/images/svg/pass.svg" />'
                    }
                }
            },
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