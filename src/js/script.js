$(document).ready(function () {
    const columns = [
        {
            data: 'case',
            className: 'openModal'
        },
        {
            data: 'state',
            className: 'stateIcon',
            render: function(data) {
                var r;
                if(data == -1) {
                    r = '<img src="./src/images/svg/warning.svg" />'
                } else if(data == 0) {
                    r = '<img src="./src/images/svg/not-pass.svg" />'
                } else if(data == 1) {
                    r = '<img src="./src/images/svg/pass.svg" />'
                }
                r += '<span class="hide">' + data + '</span>';
                return r;
            }
        },
        {data: 'text'},
        {data: 'tag'},
    ];

    const columnsCIU = [
        {data: 'order'},
        {data: 'title'},
        {data: 'role'},
    ];

    const columnDefs = [
        {
            target: [0, 1],
            orderable: true
        },
        // {
        //     target: 3,
        //     visible: false,
        // },
        {
            targets: '_all',
            orderable: false
        }
    ];

    const columnDefsCIU = [
        {
            target: 0,
            visible: false
        },
        {
            targets: '_all',
            orderable: false
        }
    ];

    const dom = 'tr';

    $('#table-a').DataTable({
        ajax: './data/data-a.json',
        columns: columns,
        columnDefs: columnDefs,
        dom: dom,
    });

    $('#table-button').DataTable({
        ajax: './data/data-button.json',
        columns: columns,
        columnDefs: columnDefs,
        dom: dom,
    });

    $('#table-img').DataTable({
        ajax: './data/data-img.json',
        columns: columns,
        columnDefs: columnDefs,
        dom: dom,
    });

    $('#table-a-ciu').DataTable({
        ajax: './data/data-a-ciu.json',
        columns: columnsCIU,
        columnDefs: columnDefsCIU,
        dom: dom,
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