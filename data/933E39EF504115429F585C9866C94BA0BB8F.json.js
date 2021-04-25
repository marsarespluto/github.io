GS.dataCache['933E39EF504115429F585C9866C94BA0BB8F'] = {
    "uid": "933E39EF504115429F585C9866C94BA0BB8F",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "name": "boxopen",
        "type": "data_record",
        "category": "commonEvents",
        "id": "933E39EF504115429F585C9866C94BA0BB8F",
        "isFolder": false,
        "parentId": "ROOT",
        "data": {
            "name": "boxopen",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "vn.MessageBoxDefaults",
                    "params": {
                        "appearDuration": 0,
                        "disappearDuration": 0,
                        "appearAnimation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "disappearAnimation": {
                            "type": 1,
                            "movement": 0,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "appearEasing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "disappearEasing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "appearDuration": 1,
                            "disappearDuration": 1
                        }
                    },
                    "uid": "172E07F461B25149E3397E430BC02D856F43",
                    "indent": 0
                },
                {
                    "id": "vn.MessageBoxVisibility",
                    "params": {
                        "duration": 30,
                        "waitForCompletion": true,
                        "id": "messageBox",
                        "visible": 1,
                        "animation": {
                            "type": 0,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "duration": 1
                        }
                    },
                    "uid": "9F0E249822F47949338964E153A9182553C6",
                    "indent": 0
                },
                {
                    "id": "gs.CreateMessageArea",
                    "params": {
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "box": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "uid": "29121491689E654A565A7EB00A9778CD2074",
                    "indent": 0
                }
            ],
            "index": "933E39EF504115429F585C9866C94BA0BB8F",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "order": 4
    },
    "summary": [
        "name",
        "type",
        "order"
    ]
}