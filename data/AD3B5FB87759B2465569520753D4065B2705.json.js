GS.dataCache['AD3B5FB87759B2465569520753D4065B2705'] = {
    "uid": "AD3B5FB87759B2465569520753D4065B2705",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "honk honk",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "AD3B5FB87759B2465569520753D4065B2705",
        "isFolder": false,
        "parentId": "ROOT",
        "data": {
            "name": "honk honk",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.PlaySound",
                    "params": {
                        "sound": {
                            "name": "honkhonk",
                            "volume": "10",
                            "playbackRate": 100
                        },
                        "musicEffect": 1,
                        "fieldFlags": {
                            "sound.volume": 0,
                            "sound.playbackRate": 1
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "6F3BAC2420F32840233A8D03C84FD0B92C21",
                    "indent": 0
                },
                {
                    "id": "gs.WaitCommand",
                    "params": {
                        "time": 300
                    },
                    "uid": "68CC16041C6E7548731838C7B8722C421DC7",
                    "indent": 0
                }
            ],
            "index": "AD3B5FB87759B2465569520753D4065B2705",
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        }
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}