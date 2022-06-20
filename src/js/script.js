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
                    var r;
                    if(data == -1) {
                        r = '<img src="/src/images/svg/warning.svg" />'
                    } else if(data == 0) {
                        r = '<img src="/src/images/svg/not-pass.svg" />'
                    } else if(data == 1) {
                        r = '<img src="/src/images/svg/pass.svg" />'
                    }
                    r += '<span class="hide">' + data + '</span>';
                    return r;
                }
            },
            {data: 'text'},
            {data: 'tag'},
        ],
        columnDefs: [
            {
                target: [0, 1],
                orderable: true
            },
            {
                target: 3,
                visible: false,
            },
            {
                targets: '_all',
                orderable: false
            }
        ],
        dom: 'itr'
    });
});

$('table').on('click', '.openModal', function() {
    const t = $(this).parents('table').DataTable();
    try {
        alert(t.row(this).data().tag)
    } catch {
        console.warn('data:' + t.row(this).data())
    }
});