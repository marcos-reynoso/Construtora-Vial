<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reporte de Provincias - {{ $month }}</title>
    <style>
         body {
        font-family: DejaVu Sans, sans-serif;
        color: #000; /* texto negro */
        background-color: #fff; /* fondo blanco */
    }

    h1, h2 {
        color: #000;
    }

    th {
        background-color: #f0f0f0;
        color: #000;
    }

    td {
        color: #000;
    }

    ul {
        margin: 0;
        padding-left: 20px;
    }

    li {
        margin-bottom: 4px;
    }
    </style>
</head>
<body>
    <h1>Reporte de Provincias - {{ $month }}</h1>
    @foreach($provinces as $province)
        <h2>{{ $province->name }}</h2>
        @if($province->works->count())
            <table>
                <thead>
                    <tr>
                        <th>Obra</th>
                        <th>Máquinas asignadas</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($province->works as $work)
                        <tr>
                            <td>{{ $work->name }}</td>
                        <td>
                                @if($work->assigment->count())
                                    <ul>
                                        @foreach($work->assigment as $assigment)
                                            <li>
                                                {{ $assigment->machine->num_ser ?? 'Sin máquina' }}
                                                @if($assigment->machine && $assigment->machine->type)
                                                    - {{ $assigment->machine->type->name }}
                                                @endif
                                            </li>
                                        @endforeach
                                    </ul>
                                @else
                                    Sin máquinas asignadas
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p>No hay obras en este mes.</p>
        @endif
    @endforeach
</body>
</html>